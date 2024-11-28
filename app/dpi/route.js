import { NextResponse } from "next/server";
import connectDB from "../db/connectdb";
import Cart from "../models/cart";


export const POST = async (request) => {
  let data = await request.json();
  
  await connectDB();

  if (data.no_of_item) {

    if (data.additions) {
      let item = await Cart.find({ addions: data.additions })
      let itemlength = item.length
      if (itemlength > 0) {

        await Cart.findOneAndUpdate({ addions: data.additions }, { no_of_item: item[0].no_of_item + data.no_of_item })
      }
      else {
        const newcartitem = new Cart({
          weight: data.weight,
          addions: data.additions,
          name: data.name,
          price: data.price,
          type: data.type,
          imgname: data.imgname,
          extra: data.extra,
          no_of_item: data.no_of_item,
          description: data.description || ''  // Handle optional description
        })

        try {
          await newcartitem.save();
          console.log('Item saved successfully');
        } catch (err) {
          console.error('Error saving item:', err);
        }
      }
    }
    else {
      let item = await Cart.find({ imgname: data.imgname })
      let itemlength = item.length
      if (itemlength > 0) {

        await Cart.findOneAndUpdate({ imgname: data.imgname }, { no_of_item: item[0].no_of_item + data.no_of_item })
      }
      else {
        const newcartitem = new Cart({
          weight: data.weight,
          name: data.name,
          price: data.price,
          type: data.type,
          imgname: data.imgname,
          extra: data.extra,
          no_of_item: data.no_of_item,
          description: data.description || ''  // Handle optional description
        })
        

        try {
          await newcartitem.save();
          console.log('Item saved successfully');
        } catch (err) {
          console.error('Error saving item:', err);
        }
      }
    }
  }

  else {
    let item = await Cart.find({ name: data.name })
    let itemlength = item.length
    if (itemlength > 0) {
      if (data.additions) {
        let given = item.filter((goku) => goku.addions)[0]
     
        given.no_of_item = given.no_of_item + 1
        await given.save()
      }
      if (!data.additions) {
        let given = item.filter((goku) => !goku.addions)[0]
        
        given.no_of_item = given.no_of_item + 1
        await given.save()
      }
    } else {
      const newcartitem = new Cart({ ...data, no_of_item: itemlength + 1 })
      await newcartitem.save()
    }
  }
  return NextResponse.json({ success: true, message: "your data has been saved in mongodb" })
}

export const GET = async (request) => {
  await connectDB()
  let wholecart = await Cart.find({})
  let oricart = []
  for (let index = 0; index < wholecart.length; index++) {
    let th = wholecart[index].toObject({ flattenObjectIds: true })

    oricart.push(th)
  }
  return NextResponse.json(oricart)
}


export const DELETE = async (request) => {
  let data = await request.json()
  await connectDB()
  let item = await Cart.find({ name: data.name })
  let itemlength = item.length
 
  if (itemlength > 0) {
    if (data.additions) {
      let am = item.filter((goku) => goku.addions)[0]
      if (am.no_of_item > 1) {
        am.no_of_item = am.no_of_item - 1
        await am.save()
        return NextResponse.json({ success: false, message: `your data has been deleted by one in _________` })

      }
      else {
       await Cart.findOneAndDelete({_id:am._id})
       return NextResponse.json({ success: true, message: `your data has been deleted by one in _________` })

      }
    }
    if (!data.additions) {
      let am = item.filter((goku) => !goku.addions)[0]
     
      if (am.no_of_item > 1) {
        am.no_of_item = am.no_of_item - 1
        await am.save()
        return NextResponse.json({ success: false, message: `your data has been deleted by one in _________` })

      }
      else{
       await Cart.findOneAndDelete({_id:am._id})
       return NextResponse.json({ success: true, message: `your data has been deleted by one in _________` })

      }
    }
  }
  

}
export const PUT = async (request) => {
    let data = await request.json()
    await connectDB()
    let item = await Cart.find({ name: data.name })
    if (data.additions) {
      let am = item.filter((goku) => goku.addions)[0]
     await Cart.findOneAndDelete({_id:am._id})
    }
    if (!data.additions) {
      let am = item.filter((goku) => !goku.addions)[0]
     await Cart.findOneAndDelete({_id:am._id})

    }
    return NextResponse.json({ success: false, message: "your data has been deleted by one in mongodb" })

}

import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  function getRandom12Digits() {
    let number = ''
    for (let i = 0; i < 12; i++) {
      number += Math.floor(Math.random() * 10)
    }
    return number
  }

  return NextResponse.json({
    data: {
      id: getRandom12Digits(),
      email: 'lynn12866@gmail.com',
      name: 'lynn1286'
    }
  })
}

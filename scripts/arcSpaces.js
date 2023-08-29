import '@jxa/global-type'
import { run } from '@jxa/run'

export const openArcAtSpecificSpace = async () => {
  return await run(() => {
    const arc = Application('Arc')
    arc.includeStandardAdditions = true

    if (!arc) return
    console.log('arc widnows', arc.windows.length)
    // console.log('arc widnows 1:', arc.windows[0])

    for (let i = 0; i < arc.windows.length; i++) {
      console.log(`arc widnows ${i}- spaces:`, arc.windows[i].spaces.length)
      const window = arc.windows[i]
      console.log('window name:', window.name())
      console.log('window id:', window.id())
      // window.spaces[]
      // for (let w = 0; w < windows.length; w++) {
      //   console.log('window', windows[w].name + 'id: ' + windows[w].id)
      // }
      // const activeSpace = arc.windows[i].activeSpace.id()
      // console.log(`arc widnows ${i}- activeSpaces:`, activeSpace)
      const spaces = arc.windows[i].spaces
      if (arc.frontmost()) {
        for (let s = 0; s < spaces.length; s++) {
          // console.log(spaces[i].id())
          if (spaces[i].id() === 'B23717A2-1A8B-4C45-84A4-C00C50CC1A5A') {
            console.log(spaces[i].name())
            console.log('focus on this space')
            spaces[i].focus()
          }
        }
        arc.activate()
      }
      // close
    }
    // arc.focus('B23717A2-1A8B-4C45-84A4-C00C50CC1A5A')
    // console.log('arc class', arc.focus())
    // console.log(
    //   'focus',
    //   JSON.stringify(arc.focus('B23717A2-1A8B-4C45-84A4-C00C50CC1A5A'))
    // )
    // console.log(
    //   typeof arc.focus({
    //     name: {
    //       _contains: 'B23717A2-1A8B-4C45-84A4-C00C50CC1A5A',
    //     },
    //   })
    // )
  })
}

// test
// const call = async () => {
//   await openArcAtSpecificSpace()
// }

// call()

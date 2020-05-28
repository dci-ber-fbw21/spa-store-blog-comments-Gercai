export const goTo = (pathname,{history}, search) => {

    history.push({
      pathname,
      search
    })
}

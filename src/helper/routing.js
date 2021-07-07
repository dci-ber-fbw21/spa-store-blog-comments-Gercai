export const goTo = (pathname,{history}, search) => {
    history.push({
      pathname,
      search
    })
}


export const reLoad = (pathname,{history}, search) => {
  history.replace({
    pathname,
    search
  })
}

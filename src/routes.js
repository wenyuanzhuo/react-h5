export const getLayout = (routes, path) => {
  if (Object.prototype.toString.call(routes) === '[Object Array]' ||
    !routes.some(item => item.layout === path) ||
    !routes.filter(item => item.layout === path)[0].routes
  ) {
    return null
  }
  const layoutRoute = routes.filter(item => item.layout === path)
  return layoutRoute
}
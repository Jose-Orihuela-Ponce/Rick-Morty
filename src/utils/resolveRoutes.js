export const resolveRoutes = (route) => {
  if (route.length <= 3) {
    return route === "/" ? route : "/:id";
  }
  return `/${route}`;
};

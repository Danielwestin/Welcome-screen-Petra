const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "", component: () => import("pages/StartPage.vue") },
      {
        path: "/second-page",
        component: () => import("pages/PersonToMeetPage.vue")
      },
      {
        path: "/third-page",
        component: () => import("pages/GuestInfo.vue")
      },
      {
        path: "/forth-page",
        component: () => import("pages/ExtraGuestInfo.vue")
      },
      {
        path: "/fifth-page",
        component: () => import("pages/ParkingPage.vue")
      },
      {
        path: "/sixth-page",
        component: () => import("pages/ParkingReminderPage.vue")
      },
      {
        path: "/seventh-page",
        component: () => import("pages/BorrowKeyPage.vue")
      },
      {
        path: "/eighths-page",
        component: () => import("pages/FloorPlanPage.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

/**
 *  @description ModifyPassword页面
 */
const router = {
    path: "/TestPaperManage",
    name: "TestPaperManage",
    component: () => import("../../views/test/TestResult"),
    meta: { requiresAuth: true }
  };

  export default router;
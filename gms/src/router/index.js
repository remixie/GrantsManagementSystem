import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Admin from "../components/Admin.vue";
import AddProfile from "../components/admin/AddProfile.vue";
import UpdateProfile from "../components/admin/UpdateProfile.vue";
import DeleteProfile from "../components/admin/DeleteProfile.vue";
import FacultyList from "../components/dept_chair/FacultyList.vue";
import TotalFacultyFunds from "../components/dept_chair/TotalFacultyFunds.vue";
import TotalDeptFunds from "../components/dept_chair/TotalDeptFunds.vue";
import AllSponsoredProjects from "../components/faculty_researcher/AllSponsoredProjects.vue";
import CurrentSponsoredProjects from "../components/faculty_researcher/CurrentSponsoredProjects.vue";
import AllAwardedGrants from "../components/faculty_researcher/AllAwardedGrants.vue";
import AllActiveGrants from "../components/faculty_researcher/AllActiveGrants.vue";
import FacultyResearcherFundsReceived from "../components/faculty_researcher/FacultyResearcherFundsReceived.vue";
import GrantsForSpecificProject from "../components/faculty_researcher/GrantsForSpecificProject.vue";
import AvailableFunds from "../components/faculty_researcher/AvailableFunds.vue";
import ExpendedFunds from "../components/faculty_researcher/ExpendedFunds.vue";
import ViewGrants from "../components/spar_worker/ViewGrants.vue";
import ViewProjects from "../components/spar_worker/ViewProjects.vue";
import ViewFaculties from "../components/spar_worker/ViewFaculties.vue";
import ViewFunds from "../components/spar_worker/ViewFunds.vue";
import AddNewProject from "../components/spar_worker/AddNewProject.vue";
import AddNewSponsor from "../components/spar_worker/AddNewSponsor.vue";
import AddNewInvestigator from "../components/spar_worker/AddNewInvestigator.vue";
import UpdateProjectStatus from "../components/spar_worker/UpdateProjectStatus.vue";
import DeleteProject from "../components/spar_worker/DeleteProject.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/addNewProfile',
    name: 'AddProfile',
    component: AddProfile
  },
  {
    path: '/updateProfile',
    name: 'UpdateProfile',
    component: UpdateProfile
  },
  {
    path: '/deleteProfile',
    name: 'DeleteProfile',
    component: DeleteProfile
  },
  {
    path: '/listDeptFaculties',
    name: 'FacultyList',
    component: FacultyList
  },
  {
    path: '/totalFundingFaculty',
    name: 'TotalFacultyFunds',
    component: TotalFacultyFunds
  },
  {
    path: '/totalFundingDept',
    name: 'TotalDeptFunds',
    component: TotalDeptFunds
  },
  {
    path: '/listSponsoredProjects',
    name: 'AllSponsoredProjects',
    component: AllSponsoredProjects
  },
  {
    path: '/listCurrentProjects',
    name: 'CurrentSponsoredProjects',
    component: CurrentSponsoredProjects
  },
  {
    path: '/allAwardedGrants',
    name: 'AllAwardedGrants',
    component: AllAwardedGrants
  },
  {
    path: '/allActiveGrants',
    name: 'AllActiveGrants',
    component: AllActiveGrants
  },
  {
    path: '/fundsReceivedByFaculty',
    name: 'FacultyResearcherFundsReceived',
    component: FacultyResearcherFundsReceived
  },
  {
    path: '/specificProjectGrants',
    name: 'GrantsForSpecificProject',
    component: GrantsForSpecificProject
  },
  {
    path: '/availableFunds',
    name: 'AvailableFunds',
    component: AvailableFunds
  },
  {
    path: '/expendedFunds',
    name: 'ExpendedFunds',
    component: ExpendedFunds
  },
  {
    path: '/listAllGrants',
    name: 'ViewGrants',
    component: ViewGrants
  },
  {
    path: '/listAllProjects',
    name: 'ViewProjects',
    component: ViewProjects
  },
  {
    path: '/listAllFaculties',
    name: 'ViewFaculties',
    component: ViewFaculties
  },
  {
    path: '/totalGrantFunds',
    name: 'ViewFunds',
    component: ViewFunds
  },
  {
    path: '/addNewProject',
    name: 'addNewProject',
    component: AddNewProject
  },
  {
    path: '/addNewSponsor',
    name: 'AddNewSponsor',
    component: AddNewSponsor
  },
  {
    path: '/addNewInvestigator',
    name: 'AddNewInvestigator',
    component: AddNewInvestigator
  },
  {
    path: '/updateProject',
    name: 'UpdateProjectStatus',
    component: UpdateProjectStatus
  },
  {
    path: '/deleteProject',
    name: 'DeleteProject',
    component: DeleteProject
  },
  
];

// added export keyword to export the router in other files
export const router = new VueRouter({
  routes,
});

export default router;

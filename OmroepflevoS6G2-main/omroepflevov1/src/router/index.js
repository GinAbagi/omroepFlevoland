import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import homeView from '../views/HomeView.vue';
import StoryView from '../views/StoryView.vue';

// subViews
import ListsView from '../views/subContentViews/ListsView.vue';
import MediaView from '../views/subContentViews/MediaView.vue';
import StoriesView from '../views/subContentViews/StoriesView.vue';
import NewStoryView from '../views/subContentViews/NewStoryView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/homeView',
    name: 'homeView',
    component: homeView,
  },
  {
    path: '/StoryView',
    name: 'StoryView',
    component: StoryView,
    children: [
      {
        path: '/StoryView/listsview',
        component: ListsView,
      },
      {
        path: '/StoryView/mediaview',
        component: MediaView,
      },
      {
        path: '/StoryView/storiesview',
        component: StoriesView,
      },
      {
        path: '/StoryView/newstory',
        component: NewStoryView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

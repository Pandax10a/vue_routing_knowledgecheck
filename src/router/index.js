import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MenuPage from '@/views/MenuPage.vue'



Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    
    component: HomePage,
    meta: [{
      title: 'fancy homepage'
    },
    {
      name: 'description',
      content: 'The best looking home page'
    },
    {
      name: 'author',
      content: 'Me meme'
    }

    ]
  },
  {
    path: '/menu',
    component: MenuPage,
    meta: [{
      title: 'Best menu ever'
    },
  {
    name: 'description',
    content: 'juicy meat'
  },
{
  name: 'author',
  content: 'Me meme meme'
}]
   
  },
 
]

const router = new VueRouter({
  routes
})
  
export default router
router.beforeEach (
    (to, from ,next) => {
      // tearing down existing meta tags
      let current_meta_tags = document.querySelectorAll(`meta`);
      for (let i = 0; i<current_meta_tags.length; i++) {
        current_meta_tags[i].remove();
      }
      // inserting a new title
      let new_meta_tags = to[`meta`];
      document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];
      
      // inserting new meta tags
      for(let i = 0; i<new_meta_tags.length; i++) {
        document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
        `<meta name="${new_meta_tags[i][`name`]}"
        content="${new_meta_tags[i][`content`]}">`)
      }
      // inserting standard meta tags
      document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
      `<meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-Width,initial-scale=1.0">`);
      // using from so compiler doesnt "..."
      from;
      // calling the next function  so we can let router continue
      next();
    }
  )
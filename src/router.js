import Vue from 'vue'
import Router from 'vue-router'

import personcenter from './components/personal-center/personal-center.vue';
import editmessage from './components/password-management/editmessage.vue';
import mymessage from './components/password-management/mymessage.vue';
import contentright01 from './components/password-management/contentright01.vue';
import prove from './components/password-management/prove.vue';
// import proveresult from './components/password-management/prove-result.vue';
import myprove from './components/password-management/myprove/myprove.vue';
import classmange from './components/classmanage/classmanageindex/manageindex.vue';
import classupload from './components/classmanage/classupload.vue';
import classuploadsuccess from './components/classmanage/classuploadsuccess.vue';
import reviewupload from './components/classmanage/reviewupload.vue';
import auditclass from './components/classmanage/auditclass.vue';
import failaudit from './components/classmanage/failaudit.vue';
import overclass from './components/classmanage/overclass.vue';
import qaclassindex from './components/qaclass/qaclassindex.vue';
import qaclassright from './components/qaclass/qaclassright.vue';
import qcrbq from './components/qaclass/qaclassrightbottomq.vue';
import qcrbd from './components/qaclass/qaclassrightbottomd.vue';
import myclassright from './components/qaclass/myclassright.vue';
import classloginindex from './components/classlogin/classloginindex.vue';
import phoneLoginer from './components/classlogin/classloginphone.vue';
import phoneRegister from './components/classlogin/classloginregister.vue';
import phonePassword from './components/classlogin/classloginpassword.vue';

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/sss',
      component: personcenter,
    },
    {
      path: '/',
      component: classloginindex,
      children: [{
        path: '',
        component: phonePassword,
      },
      {
        path: "phoneRegister",
        component: phoneRegister
      }, {
        path: 'phoneLoginer',
        component: phoneLoginer,
      }]

    },
    {

      path: '/aaa/',
      component: mymessage,
      redirect: '/aaa/message',
      children: [
        {
          path: 'message',
          component: editmessage,
        },
        {
          path: 'prove',
          component: myprove,
          children: [
            {
              path: '',
              component: prove,
            },
            // {
            //   path: '/proveresult',
            //   component: proveresult,
            // }
          ]
        },
        {
          path: 'manage',
          component: contentright01,
        }
      ]
    },
    {
      path: '/bbb/',
      component: classmange,
      redirect: '/bbb/classupload',
      children: [
        {
          path: 'classupload',
          component: classupload
        },
        {
          path: 'successupload',
          component: classuploadsuccess
        },
        {
          path: 'reviewupload',
          component: reviewupload
        },
        {
          path: 'auditclass',
          component: auditclass
        },
        {
          path: 'failaudit',
          component: failaudit
        },
        {
          path: 'overclass',
          component: overclass
        }
      ]
    },
    {
      path: '/ccc/',
      component: qaclassindex,
      redirect: '/ccc/qatiwen',
      children: [
        {
          path: 'qatiwen',
          component: myclassright,
          // redirect: '/qatiwen/qcrbq',
          children: [
            {
              path: '',
              component: qaclassright,
              redirect: '/ccc/qatiwen/qcrbq',
              children: [
                {
                  path: 'qcrbq',
                  component: qcrbq,
                },
                {
                  path: 'qcrbd',
                  component: qcrbd,
                }
              ]
            },

          ]
        },
      ]
    }

  ]
})

export default router



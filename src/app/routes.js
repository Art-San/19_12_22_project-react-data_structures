// core components
import Main from './page/main'
import AppsIcon from '@mui/icons-material/Apps'
import OneToManyPage from './page/dataRelationship/oneToMany/oneToMany'
import ManyToManyPage from './page/dataRelationship/manyToMany/manyToMany'
import OneToOnePage from './page/dataRelationship/oneToOne/oneToOne'
import Introduction from './page/dataRelationship/introduction/introduction'
import NormaDenorma from './page/dataRelationship/normaDenorma/normaDenorma'
import OneToOnePage1 from './page/dataRelationship/oneToOne1/oneToOne1'

const routes = [
    {
        path: '/index',
        name: 'Main',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/',
        component: Main
    },
    {
        divider: true
    },
    {
        title: 'Data Relationship'
    },
    {
        path: '/onetoone',
        name: 'One-to-One',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/relationship',
        component: OneToOnePage
    },
    {
        path: '/onetomany',
        name: 'One-to-Many',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/relationship',
        component: OneToManyPage
    },
    {
        path: '/manytomany',
        name: 'Many-to-Many',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/relationship',
        component: ManyToManyPage
    },
    {
        divider: true
    },
    {
        title: 'Конспект'
    },
    {
        path: '/introduction',
        name: 'Вступление',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/relationship',
        component: Introduction
    },
    {
        path: '/normal-denormal',
        name: 'Норма-Денорма',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/relationship',
        component: NormaDenorma
    },
    {
        path: '/ontoone',
        name: 'Тип связи один к одному',
        icon: AppsIcon,
        iconColor: 'Primary',
        layout: '/relationship',
        component: OneToOnePage1
    }

]
export default routes

import {AiFillGolden} from 'react-icons/ai'
import {MdAutoFixNormal} from 'react-icons/md'
import {GoScreenNormal} from 'react-icons/go'
import {TbPremiumRights} from 'react-icons/tb'
const packages = [
    {
        id: 1,type:'Bronze',desc:'pata net noma',speed:'5mbp', price:1300,icon:<GoScreenNormal/>
    },
    {
        id: 1,type:'Silver',desc:'pata net noma',speed:'5mbp', price:1300,icon:<MdAutoFixNormal/>
    },
    {
        id: 1,type:'Gold',desc:'pata net noma',speed:'5mbp', price:1300,icon:<AiFillGolden/>
    },
    {
       id:2, type:'Premium',desc:'pata net noma',speed:'23mbp', price:9000,icon:<TbPremiumRights/>
    }
] 
export default packages
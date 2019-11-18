import { app } from './app'
import { authentication } from './authentication'
import { breadcrumbs } from '@/components/Breadcrumbs/store/modules/breadcrumbs'
import { dialogbox } from '@/components/Dialog/store/modules/dialogbox'
import { progressbar } from '@/components/Progressbar/store/modules/progressbar'
import { sidebar } from '@/components/Sidebar/store/modules/sidebar'
import { snackbar } from '@/components/Snackbar/store/modules/snackbar'
import { utilitybar } from '@/components/Utilitybar/store/modules/utilitybar'
import { dataiterator } from '@/components/DataIterator/store/modules/dataiterator'
import { list } from '@/components/List/store/modules/list'
import { footer } from '@/components/Footer/store/modules/footer'
import { mainmenu } from '@/components/Navigation/store/modules/mainmenu'

export const modules = {
  app,
  authentication,
  breadcrumbs,
  dialogbox,
  progressbar,
  sidebar,
  snackbar,
  utilitybar,
  dataiterator,
  list,
  footer,
  mainmenu,
}

import { AnimatePresence, motion } from "framer-motion"

export function MobileSidebar({ section, sections, sideBar, setSideBar, onMobileItemSelect }: any) {
    if (!sections || !section || !sections.data) return <div/>

    const NavItem = (item: any) => {
        if (!item.sections || item.sections.length === 0) {
            return <div className="opacity-50"> { item.title } </div>
        }

        return (<div tabIndex={0} className="text-left p-4 flex flex-col items-start">
            <span className="text-xl opacity-50">{ item.title }</span>
            { item.sections.map((subitem: any, i: number) => (<button key={i} className="ml-4 text-lg text-white mt-2" onClick={() => onMobileItemSelect(subitem)}>{ subitem.title }</button>))}
        </div>)
    }

    const secs = sections.data.map((section: any, i: number) => (<NavItem {...section} key={i}/>))

    return (<AnimatePresence>        
        {sideBar && (
          <>
            <motion.div
              key={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{ type: "spring", bounce: 0, duration: 1.0 }}
              className="text-white shadow-lg w-full h-auto p-5 border-primary-color bg-primary-gradient bg-no-repeat bg-top bg-fill border border-primary-color z-50">
              { secs }
            </motion.div>
          </>
        )}
      </AnimatePresence>)
}
"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Loader, MainHeader, GuiceCardMain} from "@garden/ui";
import CardShopComponent from "@/components/card/CardShopComponent";
import Link from "next/link";
import {api} from "@/utils/api";
import ItemsComponent from "@/components/profile/items/ItemsComponent";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const guides = api.guide.getGuideount.useQuery(4)
    const items = api.item.getItemsCount.useQuery(3)
    if(guides.isLoading || items.isLoading){
        return <Loader/>
    }
  return (
      <>
            <MainHeader/>
          <div className="mx-auto container mt-4">
              <div>
                  <div className="float-right">
                      <Link href={"/profile/additems"} className="text-sm px-5 py-2.5 mr-2 mb-2 font-medium rounded-lg focus:outline-none text-main">Все</Link>
                  </div>
                  <h1 className="text-custom-black font-bold text-xl">Популярное в справочнике</h1>
                  <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                      <div
                          className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                          {guides.data && guides.data.map((guide:any) => (
                              <GuiceCardMain title={guide.title} id={guide.id} img={guide.img}/>
                          ))}
                      </div>
                  </div>
              </div>
              <h1 className="text-custom-black font-bold text-xl">Популярное в интернет-магазине</h1>
              <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                  <div
                      className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                      {items.data && items.data.map((item:any) => (
                          <CardShopComponent title={item.title} id={item.id} imgURL={item.img} price={item.price}/>
                      ))}
                  </div>
              </div>
          </div>
      </>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>
    //
    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //     <div className={styles.thirteen}>
    //       <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
    //     </div>
    //   </div>
    //
    //   <div className={styles.grid}>
    //     <a
    //       href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>
    //
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>Explore the Next.js 13 playground.</p>
    //     </a>
    //
    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}

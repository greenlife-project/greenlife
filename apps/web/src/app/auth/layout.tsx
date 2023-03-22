import React from 'react';

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode;
}){
    return(
        <div className="h-screen">
            <div className="h-full container mx-auto">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        {children}
                    </div>
                    <div
                        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    </div>
                </div>
            </div>
        </div>
    )
}

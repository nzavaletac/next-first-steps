import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'About',
 description: 'This is About',
 keywords: ['About Page', 'Noe']
};
export default function AboutPage(){
    return(
        <span className="text-7xl">About Page</span>
    )
}

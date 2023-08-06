import React, {  PropsWithChildren } from "react";
import './Layout.css';

type Props = PropsWithChildren & {
  title: string
}

function Layout ({title, children}: Props): JSX.Element {
  return (<>
    <h1>{title}</h1>
    <div className="container">
      {children}
    </div>
    </>)
}

export default Layout
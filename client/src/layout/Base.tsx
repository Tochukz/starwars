import TopBar from "./TopBar";

import '../scss/base.scss';
import AlertDialog from './AlertDialog';

export default function Base(props: { children: any}) {
  return (
    <div className="base">
      <TopBar />
      <AlertDialog />
      { props.children }
    </div>
  )
}

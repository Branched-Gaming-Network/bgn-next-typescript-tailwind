// Landing Page
// app\page.tsx -> url/
import TreeLeft from "../../../brand-art/tree-left";
import TreeRight from "../../../brand-art/tree-right";
import TreeSVG from "../../../brand-art/TreeSVG";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full mt-36">
      <div className="w-full">
        <div className="flex justify-center">
            {/* <TreeSVG className="w-1/2"/>
            <div className="w-24">

            </div> */}
          <div className="space-x-1 absolute ">
            <TreeLeft className="h-96 absolute top-24 -left-48" />
            <TreeRight className="h-96 absolute top-24 -left-48" />
          </div>
        </div>
      </div>
    </main>
  );
}

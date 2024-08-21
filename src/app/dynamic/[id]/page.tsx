// Routed page 
// app\dynamic\[id]\page.tsx -> url/dynamic/[id]

//this page would normally be dynamically rendered and not stored in cache 
//can use generateStaticParams() to generate these pages statically ahead of time to store in cache

export default function DynamicSegment() {

    //run a fetch request here to pull the data for specific instances.

    return(
        <>
            This page shows how to display pieces of data with dynamic names
            The folder name needs wrapped in square brackets
        </>
    );
}


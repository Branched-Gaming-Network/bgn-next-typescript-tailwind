export default function Loading() {
    // Wrap elements in <Suspense> and specify "fallback={}"
    return(
        <main>
            <h2 className="text-primary">Loading Example...</h2>
            <p>This is an example of a loading page</p>
        </main>
    )
}
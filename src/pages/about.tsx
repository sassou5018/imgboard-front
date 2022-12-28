import useTitle from "../hooks/useTitle"
export default function About() {
    useTitle("About")
    return (
        <>
            <head>
                <title>About</title>
            </head>
            <div>
                About
            </div>
        </>
    )
}
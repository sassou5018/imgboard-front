import HomeLayout from '../components/layouts/homeLayout'
import Thread from '../components/thread'
const testPost ={
    title: "Test Post",
    author: "Anon",
    date: "26-12-2022",
    imageUrl: "https://picsum.photos/200/300",
    text: "Lorem ipsum dolor sit amet",
    id: 1
}

export default function Home(){
    return(
        <>
        <HomeLayout>
            <Thread {...testPost}/>
            <Thread {...testPost}/>
            <Thread {...testPost}/>
            <Thread {...testPost}/>
        </HomeLayout>
        </>
    )
}
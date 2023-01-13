import { useRouter } from "next/router"

export default ({ uri }: any) => {
    const router = useRouter()

    return (<div>
        <p className="text-7xl">
            {router.query.id}
        </p>
    </div>)
}
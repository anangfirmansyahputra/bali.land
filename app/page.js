import dynamic from 'next/dynamic'
const DynamicMap = dynamic(() => import("./_components/map"), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <DynamicMap />
    </main>
  )
}

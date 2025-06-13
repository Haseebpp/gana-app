// OrderDetail.jsx
import { useParams } from 'react-router'

export default function OrderDetail() {
  const { id } = useParams()
  return (
    <section className="mt-6 p-4 border rounded bg-white shadow">
      <h2 className="font-medium text-lg">Order: {id}</h2>
      <p>Here you’d fetch and display details for order <code>{id}</code>.</p>
    </section>
  )
}

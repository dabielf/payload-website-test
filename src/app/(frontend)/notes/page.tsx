
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { cache } from 'react'


export default async function NotesPage() {
  let notes: RequiredDataFromCollectionSlug<'notes'>[] = []

  notes = await queryNotes()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Notes</h1>
      <p className="text-gray-600 mb-4">
        This is a placeholder for the Notes page. Implement your notes functionality here.
      </p>
      {notes.map((note) => (
        <div key={note.id} className='mb-4'>
          <h2>{note.title} by {note.author?.name || 'Unknown author'}</h2>
          <RichText data={note.content} />
        </div>
      ))}
    </div>
  )
}

const queryNotes = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const notes = await payload.find({
    collection: 'notes',
    limit: 10,
    
    pagination: false,
  })
  return notes.docs
})
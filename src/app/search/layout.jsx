import SearchHeader from '@/Components/SearchHeader'
import './../globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
    <div>
        <SearchHeader /> 
        {children}     
    </div>
  )
}

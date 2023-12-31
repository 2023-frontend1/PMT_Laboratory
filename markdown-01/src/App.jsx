import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import fetchDataIncludingMarkdown from './libs/axios'

const App = () => {
  const [fetchedData, setFetchedData] = useState()
  useEffect(() => {
    const dataFetching = async () => {
      const data = await fetchDataIncludingMarkdown()
      setFetchedData(data)
    }
    dataFetching()
  }, [setFetchedData])

  return (
    <>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {fetchedData?.content}
      </Markdown>
    </>
  )
}

export default App

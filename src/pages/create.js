import {useState,useContext,useRef} from 'react'
import Alert from '../components/alert/alert';
import AuthorsMultiSelect from '../components/authorsMultiSelect/authorMultiSelect';
import PageTitle from '../components/pagetitle/pagetitle';
import TagsMultiSelect from '../components/tagsMultiSelect/tagsMultiSelect';
import { userContext } from '../store/userContent'
function Create(){
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [coverURL, setCoverURL] = useState('https://www.linkpicture.com/q/book-na-1.jpg');

    const {user,}=useContext(userContext)
    const [bookTitle,setBookTitle]=useState('')

    const [err,seterr]= useState('')
    const [successMsg, setSuccessMsg] = useState('');

    const titleInputEl = useRef();

    function resetStates() {
      setSelectedTags([]);
      setSelectedAuthors([]);
      setBookTitle('');
      setShortDescription('');
      setDescription('');
      setCoverURL('https://www.linkpicture.com/q/book-na-1.jpg')
      titleInputEl.current.focus();
    }
  
    function resetAlerts() {
      seterr('');
      setSuccessMsg('');
    }
    async function handleSubmit(e){
        e.preventDefault()

      if (!user) {
        seterr('You need to be logged in.')
        return;
      }

      if (!bookTitle) {
        seterr('Book title is required.')
        return
      }

    const selectedAuthorsArray = selectedAuthors.map((item) => item.value);
    const selectedTagsArray = selectedTags.map((item) => item.value);
      try {
          const response = await fetch('https://iifsd.herokuapp.com/students', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.jwt}`,
          },
          body: JSON.stringify({
            "book_title": bookTitle,
          "book_short_description": shortDescription,
          "book_description": description,
          "cover_url": coverURL,
          "authors": selectedAuthorsArray,
          "tags": selectedTagsArray
          }),
        })

        if (!response.ok){
          throw new Error ('server responds with error !!')
        }
    const data = await response.json();
    // success
    console.log(data)

    setSuccessMsg(`New book: ${data.book_title} with ID: ${data.id} created.`)
    resetStates(); // empty all text boxes and focus to the book title

    }catch (error){
      console.log(error)
      seterr(error)
    }}
    return (
      
        <div className="page_create">
            <div className="page__create container--no-flex">

<PageTitle title="Create A Book" subTitle="in the Open Library" />

{err && <Alert err msg={err.toString()} />}
{successMsg && <Alert msg={successMsg.toString()} />}
{!user && <Alert err msg='Anonymous users are not allowed to create a book. Please log in.' />}
<form onSubmit={handleSubmit}>
<label htmlFor="book-title">Book Title:</label>
        <input ref={titleInputEl} type="text" id="book-title" placeholder="book title" value={bookTitle} onChange={(e) => {resetAlerts(); setBookTitle(e.target.value) }} />

        <label htmlFor="book-short-description">Short Description:</label>
        <input type="text" id="book-short-description" placeholder="short description" value={shortDescription} onChange={(e) => {resetAlerts(); setShortDescription(e.target.value) }} />

        <label htmlFor="book-description">Description:</label>
        <textarea
          id="book-description"
          placeholder="description" value={description} onChange={(e) => {resetAlerts(); setDescription(e.target.value) }} />

        <label htmlFor="book-cover-url">Book cover URL:</label>
        <input type="text" id="book-cover-url" placeholder="URL of the cover" value={coverURL} onChange={(e) => {resetAlerts(); setCoverURL(e.target.value) }} />

        <AuthorsMultiSelect selectedAuthors={selectedAuthors} setSelectedAuthors={setSelectedAuthors} setError={seterr} setSuccessMsg={setSuccessMsg} />

        <TagsMultiSelect selectedTags={selectedTags} setSelectedTags={setSelectedTags} setError={seterr} setSuccessMsg={setSuccessMsg} />

        <button className="button button-primary" type="submit">Submit</button>
        </form>
        </div>
      </div>
    )
}
export default Create
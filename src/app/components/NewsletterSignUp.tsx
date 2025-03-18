const NewsletterSignUp = () => {
  return (
    <div className="w-full px-12 flex justify-center space-x-4">
      <h1 className="text-xl font-semibold my-auto ">Stay up to date:</h1>
      <textarea
        className="bg-transparent resize-none outline outline-1 rounded-md outline-background-600 text-left pl-2 flex justify-center"
        placeholder="johndoe@email.com"
        rows={1}
      ></textarea>
      <button className="ml-8 px-8 font-semibold font-mono outline outline-secondary-600 drop-shadow-xl rounded-xl text-text-100 transition ease-in-out hover:scale-105 duration-300">
        Submit
      </button>
    </div>
  );
};

export default NewsletterSignUp;

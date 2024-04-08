
function Footer() {
    return (
      <>
        <footer className="fixed bottom-0 w-full bg-gray-800 py-5">
            <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row">

                <div className="text-white flex flex-col items-center m-4 lg:mb-0">
                    <a href="https://www.buymeacoffee.com/eamarquezh" target="_blank" className="text-gray-300 hover:text-white">
                        ☕Buy me a cofee
                    </a>
                </div>

                <div className="text-white flex flex-col items-center m-4 lg:mb-0">
                    <a href="#" className="text-gray-300 hover:text-white flex">
                        <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="Octocat" width="24" height="24" />Repository
                    </a>
                </div>

                <div className="text-white flex flex-col items-center m-4 lg:mb-0">
                    <a href="https://github.com/eamarquezh" target="_blank" className="text-gray-300 hover:text-white">
                        😊About dev: @eamarquezh
                    </a>
                </div>
            </div>
        </footer>   


      </>
    )
  }
  
  export default Footer
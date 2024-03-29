const Index = () => (
  <>
    <div className="wrapper">
      <div className="container">
        <h1>Hello Merge World!</h1>
        <img
          src="https://www.istockphoto.com/resources/images/HomePage/Billboard/FreeImagesSupport-iStock-175245308.jpg"
          alt="Stock Image"
        />
      </div>
    </div>
    <style jsx>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }

      .wrapper {
        align-items: center;
        display: flex;
        height: 100vh;
        width: 100%;
      }

      .container {
        margin: auto;
      }
    `}</style>
  </>
)

export default Index

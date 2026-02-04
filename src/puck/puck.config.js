// Puck configuration
export const config = {
  components: {
    HelloWorldBlock: {
      render: () => {
        return <h1>"Hello World!"</h1>;
      },
    },
  },
  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    },
  }
};
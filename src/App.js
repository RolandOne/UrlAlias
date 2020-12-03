import { Grid, Header, Container } from 'semantic-ui-react'
import FormExampleSuccess from "./components/form";
import 'semantic-ui-css/semantic.css'

function App() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>      </Header>

        <Container>
          <FormExampleSuccess></FormExampleSuccess>
        </Container>

      </Grid.Column>
    </Grid>
  );
}

export default App;

import Button from '@mui/material/Button';
import { publicApiFunction } from "@saju/util1";

export default function Header(props) {
  const abcd = publicApiFunction();
  console.debug({abcd});

  return <section>
    <h1>{abcd}</h1>
    Header here
    <Button variant="contained">Hello World</Button>
  </section>;
}

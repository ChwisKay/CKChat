import { h, render } from "preact";
import Chat from "./modules/Chat";
import chatsettings from "../src/helpers/chatsettings";

const App = () => <Chat {...chatsettings} />;
render(<App />, document.body);

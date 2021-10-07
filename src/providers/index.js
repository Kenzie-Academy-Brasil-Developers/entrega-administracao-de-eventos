import { CasamentoProvider } from "./Casamento";
import { ConfraProvider } from "./Confraternização";
import { FormaturaProvider } from "./Formatura";

const Providers = ({ children }) => {
  return (
    <CasamentoProvider>
      <FormaturaProvider>
        <ConfraProvider>{children}</ConfraProvider>
      </FormaturaProvider>
    </CasamentoProvider>
  );
};

export default Providers;

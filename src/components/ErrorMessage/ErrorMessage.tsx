type ErrorMessage = {
  message: string;
}
const ErrorMessage = ({ message}: ErrorMessage) => (
  <p >{message}</p>
);
export default ErrorMessage;
import * as yup from "yup";

const mailValidation = (x) => x.yup.object().shape({
    mail: yup.string().mail("ایمیل وارد شده صحیح نیست"),
});

export default mailValidation ;
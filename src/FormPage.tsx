// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiLocation = 'http://35.206.84.30/';

interface FormValues {
  code: string,
  lang: string,
  qualityArg: string,
}

function FormPage() {
  const [submitting, setSubmitting] = useState(false);

  const validateForm = (values: FormValues) => {
    if (!values.code) {
      return { code: 'Code cannot be blank.' };
    }
    return {};
  };

  const submitPOSTAndDownload = async (code: string, language: string, qualityArg: string) => {
    const response = await axios.post(apiLocation, {
      text: code,
      lang: language,
      quality: qualityArg,
    }, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'generated.png');
    document.body.appendChild(link);
    setSubmitting(false);
    link.click();
  };

  return (
    <div className="App">
      <Formik
        initialValues={{
          code: "const foo = (): string => 'hello';",
          lang: 'typescript',
          qualityArg: 'medium',
        }}
        onSubmit={async (values: FormValues) => {
          setSubmitting(true);
          submitPOSTAndDownload(values.code, values.lang, values.qualityArg);
        }}
        validate={(values) => validateForm(values)}
      >
        <Form>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="code">Code:</label>
            <div className="col-sm-10">
              <Field className="form-control" as="textarea" name="code" type="text" rows={16} spellcheck="false" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="lang">Language:</label>
            <div className="col-sm-10">
              <Field className="form-select" as="select" name="lang">
                <option value="c">C</option>
                <option value="css">CSS</option>
                <option value="cpp">C++</option>
                <option value="csharp">C#</option>
                <option value="docker">Docker</option>
                <option value="go">Go</option>
                <option value="graphql">GraphQL</option>
                <option value="haskell">Haskell</option>
                <option value="java">Java</option>
                <option value="javascript">Javascript</option>
                <option value="json">JSON</option>
                <option value="julia">Julia</option>
                <option value="kotlin">Kotlin</option>
                <option value="latex">LaTeX</option>
                <option value="lisp">Lisp</option>
                <option value="lua">Lua</option>
                <option value="makefile">Makefile</option>
                <option value="markdown">Markdown</option>
                <option value="markup">Markup</option>
                <option value="matlab">MATLAB</option>
                <option value="mongodb">MongoDB</option>
                <option value="objectivec">Objective-C</option>
                <option value="pascal">Pascal</option>
                <option value="perl">Perl</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="r">R</option>
                <option value="racket">Racket</option>
                <option value="ruby">Ruby</option>
                <option value="rust">Rust</option>
                <option value="scala">Scala</option>
                <option value="scheme">Scheme</option>
                <option value="swift">Swift</option>
                <option value="typescript">Typescript</option>
                <option value="visual-basic">Visual Basic</option>
              </Field>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="quality">Quality:</label>
            <div className="col-sm-10">
              <Field className="form-select" as="select" name="quality">
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="extreme">Extreme</option>
              </Field>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? 'Please wait...' : 'Submit'}</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormPage;

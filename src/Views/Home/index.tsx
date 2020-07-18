import React, { useCallback, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import ArrayInputs from "Components/ArrayInputs";
import Button from "Components/Button";
import Image from "Components/Image";
import Radio from "Components/Radio";
import Textarea from "Components/Textarea";
import TextInput from "Components/TextInput";

import { useLanguage, useGlobalState, GlobalActions } from "Redux/Global";

import { removeNonNumeric } from "Utils/String";
import { isValidLinkedinProfile, isValidEmail } from "Utils/Validate";

import { AllLangs, AllLangsOptions } from "Assets/Languages";

import { Container, Header, FormContainer, ButtonContainer } from "./style";

type AllowedCurrencies = "USD" | "BRL" | "EUR";
type ArrayFieldsType = "skill" | "language";

const currencyOptions = [
  {
    name: "USD ($)",
    value: "USD",
  },
  {
    name: "BRL (R$)",
    value: "BRL",
  },
  {
    name: "EUR (€)",
    value: "EUR",
  },
];

const View: React.FC = () => {
  const { language } = useGlobalState();
  const dispatch = useDispatch();

  const FormLanguage = useLanguage<"Form">("Form");
  const ErrorsLanguage = useLanguage<"Error">("Error");

  const { register, handleSubmit, setValue, errors } = useForm();
  const [currency, setCurrency] = useState<AllowedCurrencies>("USD");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [skills, setSkills] = useState<Array<string>>([""]);
  const [languages, setLanguages] = useState<Array<string>>([""]);

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  const formatAge = useCallback(
    (age: string) => {
      let formatted = removeNonNumeric(age);

      if (formatted.length > 3) {
        formatted = formatted.substr(0, 3);
      }

      setValue("age", formatted);
    },
    [setValue],
  );

  const getLanguagesOptions = useMemo(() => {
    const allLangsOptions = [];

    for (const lang in AllLangs) {
      allLangsOptions.push({
        name: AllLangs[lang as AllLangsOptions],
        value: lang,
      });
    }

    return allLangsOptions;
  }, []);

  const changeArrayFieldValue = useCallback(
    (type: ArrayFieldsType, index: number, value: string) => {
      switch (type) {
        case "skill":
          const newSkills = skills.slice();
          newSkills[index] = value;
          setSkills(newSkills);
          break;
        case "language":
          const newLanguages = languages.slice();
          newLanguages[index] = value;
          setLanguages(newLanguages);
          break;
        default:
          return;
      }
    },
    [skills, languages],
  );

  const addArrayField = useCallback(
    (type: ArrayFieldsType) => {
      switch (type) {
        case "skill":
          const newSkills = skills.slice();
          newSkills.push("");
          setSkills(newSkills);
          break;
        case "language":
          const newLanguage = languages.slice();
          newLanguage.push("");
          setLanguages(newLanguage);
          break;
        default:
          return;
      }
    },
    [skills, languages],
  );

  const removeArrayField = useCallback(
    (type: ArrayFieldsType, index: number) => {
      switch (type) {
        case "skill":
          const newSkills = skills.slice();
          newSkills.splice(index, 1);
          setSkills(newSkills);
          break;
        case "language":
          const newLanguage = languages.slice();
          newLanguage.splice(index, 1);
          setLanguages(newLanguage);
          break;
        default:
          return;
      }
    },
    [languages, skills],
  );

  return (
    <Container>
      <Header>{FormLanguage.reactResumeGenerator}</Header>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Radio
          label={FormLanguage.language}
          name="language"
          value={language}
          onChange={e =>
            dispatch(
              GlobalActions.setLanguage(e.target.value as AllLangsOptions),
            )
          }
          options={getLanguagesOptions}
        />
        <Radio
          label={FormLanguage.currency}
          name="currency"
          value={currency}
          onChange={e => setCurrency(e.target.value as AllowedCurrencies)}
          options={currencyOptions}
        />
        <Image
          label={FormLanguage.profilePicture}
          buttonLabel={FormLanguage.uploadFile}
          buttonEditLabel={FormLanguage.buttonEdit}
          buttonRemoveLabel={FormLanguage.buttonRemove}
          buttonSelectLabel={FormLanguage.buttonSelect}
          value={profilePicture}
          setValue={setProfilePicture}
        />
        <TextInput
          isRequired
          label={FormLanguage.name}
          name="name"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && ErrorsLanguage.required}
        />
        <TextInput
          isRequired
          label={FormLanguage.headline}
          name="headline"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && ErrorsLanguage.required}
        />
        <Textarea
          isRequired
          label={FormLanguage.about}
          name="about"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && ErrorsLanguage.required}
        />
        <TextInput
          label={FormLanguage.age}
          name="age"
          onChange={e => formatAge(e.target.value)}
          innerRef={register()}
        />
        <TextInput
          label={FormLanguage.phone}
          name="phone"
          innerRef={register()}
        />
        <TextInput
          label={FormLanguage.graduation}
          name="gaduation"
          innerRef={register()}
        />
        <TextInput
          label="Email"
          name="email"
          innerRef={register({
            validate: value =>
              isValidEmail(value) || ErrorsLanguage.invalidEmail,
          })}
          errorMessage={errors.email && errors.email.message}
        />
        <TextInput
          label="Linkedin"
          name="linkedin"
          innerRef={register({
            validate: value =>
              isValidLinkedinProfile(value) || ErrorsLanguage.invalidLinkedin,
          })}
          errorMessage={errors.linkedin && errors.linkedin.message}
        />
        <TextInput
          label={FormLanguage.salaryExpectation}
          name="salaryExpectation"
          onChange={e =>
            setValue("salaryExpectation", removeNonNumeric(e.target.value))
          }
          innerRef={register()}
        />
        <ArrayInputs
          label={FormLanguage.competences}
          inputs={skills}
          setValue={(index, value) =>
            changeArrayFieldValue("skill", index, value)
          }
          removeField={index => removeArrayField("skill", index)}
          addField={() => addArrayField("skill")}
        />
        <ArrayInputs
          label={FormLanguage.languages}
          inputs={languages}
          setValue={(index, value) =>
            changeArrayFieldValue("language", index, value)
          }
          removeField={index => removeArrayField("language", index)}
          addField={() => addArrayField("language")}
        />
        <ButtonContainer>
          <Button aria-label="submit">{FormLanguage.submit}</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default View;

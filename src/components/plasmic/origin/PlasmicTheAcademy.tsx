// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oDn7wdWyHsZpqBYxQPecYY
// Component: gI-_xi3HSGWq

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: -pyQ0ZlAFi0z/component
import TextInput from "../../TextInput"; // plasmic-import: I5js4PhjVC86/component
import Button from "../../Button"; // plasmic-import: KyOtxkGq5z0v/component

import { useScreenVariants as useScreenVariantsjLoFvAoj5APq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JLoFvAOJ5aPq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oDn7wdWyHsZpqBYxQPecYY/projectcss
import sty from "./PlasmicTheAcademy.module.css"; // plasmic-import: gI-_xi3HSGWq/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 30-RNx0w20PV/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: r-0xa9xlFQHA/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: vgnGHPdtvCPx/icon
import AngleRightsvgIcon from "./icons/PlasmicIcon__AngleRightsvg"; // plasmic-import: HCLMFHaTu_j6/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: Bl1NPcyvgth9/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: iDBqeLy3gvxe/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: dpmZiU3Eo7tI/icon
import gcLibrariesCreativeTechLabWiOevpvRfW4Unsplashjpg1Q73Y52XVkg from "./images/gcLibrariesCreativeTechLabWiOevpvRfW4Unsplashjpg.jpg"; // plasmic-import: 1Q73y52X-Vkg/picture
import mikeKenneallyTNaLoIZhqVmUnsplash1JpgYqqmt2KRjDd from "./images/mikeKenneallyTNaLoIZhqVmUnsplash1Jpg.jpg"; // plasmic-import: Yqqmt2kRJDd_/picture
import lexSirikiatEjbQq0FgkFeUnsplashjpgPvJa2Ogs44Dm from "./images/lexSirikiatEjbQq0FgkFeUnsplashjpg.jpg"; // plasmic-import: PvJa2OGS44DM/picture
import tylerNixHzWerZc5YP4UnsplashjpgUio2G6SsCy5X from "./images/tylerNixHzWerZc5YP4Unsplashjpg.jpg"; // plasmic-import: Uio2G6ssCy5x/picture

createPlasmicElementProxy;

export type PlasmicTheAcademy__VariantMembers = {};
export type PlasmicTheAcademy__VariantsArgs = {};
type VariantPropType = keyof PlasmicTheAcademy__VariantsArgs;
export const PlasmicTheAcademy__VariantProps = new Array<VariantPropType>();

export type PlasmicTheAcademy__ArgsType = {};
type ArgPropType = keyof PlasmicTheAcademy__ArgsType;
export const PlasmicTheAcademy__ArgProps = new Array<ArgPropType>();

export type PlasmicTheAcademy__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  _3?: Flex__<"a">;
  textInput?: Flex__<typeof TextInput>;
  httpsstudioplasmicapp?: Flex__<"a">;
};

export interface DefaultTheAcademyProps {
  className?: string;
}

const $$ = {};

function PlasmicTheAcademy__RenderFunc(props: {
  variants: PlasmicTheAcademy__VariantsArgs;
  args: PlasmicTheAcademy__ArgsType;
  overrides: PlasmicTheAcademy__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjLoFvAoj5APq()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__sYHja)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__n8Dq6)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oEh5)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bDqFl
                  )}
                >
                  {"Get 55% off Lorem Ipsum enough lorem discount"}
                </div>
              </Stack__>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__vKBny)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__us03Y
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Stack__
                    as={PlasmicLink__}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__naQe
                    )}
                    platform={"react"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__aqJ5S)}
                        role={"img"}
                      />
                    ) : null}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xMocN
                      )}
                    >
                      {"Log in"}
                    </div>
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__ejlOm)}
                        role={"img"}
                      />
                    ) : null}
                  </Stack__>
                </div>
              ) : null}
            </Stack__>
          </Stack__>
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__rAoyy)}>
            <div className={classNames(projectcss.all, sty.freeBox__zLt62)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pl14I)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___1YhPg)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__mTk4X
                    )}
                  >
                    {"The Academy"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0L5ZY
                    )}
                  >
                    {
                      "Origin offers several courses for all coffeelovers. Check our courses\nand events."
                    }
                  </div>
                </Stack__>
              </Stack__>
              <div className={classNames(projectcss.all, sty.columns__miKhh)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__xnRd0)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__np42H
                    )}
                  >
                    {"Barista level 1"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fr2I
                    )}
                  >
                    {
                      "Whether at home or at work, your coffee will never be the same. Come and learn our brand new course tailored to any coffee lover."
                    }
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___2OJjO
                    )}
                    href={`/about`}
                    platform={"react"}
                  >
                    {"Course details"}
                  </PlasmicLink__>
                </Stack__>
                <div className={classNames(projectcss.all, sty.column__tBju5)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__oSpx5)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: gcLibrariesCreativeTechLabWiOevpvRfW4Unsplashjpg1Q73Y52XVkg,
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__bTOb9)}>
            <div className={classNames(projectcss.all, sty.freeBox__fCOtr)}>
              <div className={classNames(projectcss.all, sty.columns__qzGb2)}>
                <div className={classNames(projectcss.all, sty.column__bpayf)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__wWXpi)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: mikeKenneallyTNaLoIZhqVmUnsplash1JpgYqqmt2KRjDd,
                      fullWidth: 1920,
                      fullHeight: 1260,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__trulo)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__wapVq
                    )}
                  >
                    {"Latte art classes"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fhalP
                    )}
                  >
                    {
                      "The latte art course for Insta-worthy cups. Get tips and techniques to help you refine and perfect hearts, rosettas and tulips."
                    }
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___16Nen
                    )}
                    href={`/about`}
                    platform={"react"}
                  >
                    {"View course"}
                  </PlasmicLink__>
                </Stack__>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___5BNae)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__sRwcb)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__j03WW)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__oJjTk)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__l7LMh
                    )}
                  >
                    {"Events"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__keaCw
                    )}
                  >
                    {
                      "We hold cupping and coffee meetups every Thursday at 4pm.\nWe also offer food tastings sponsored by local businesses."
                    }
                  </div>
                </div>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__hftSb)}>
            <div className={classNames(projectcss.all, sty.freeBox__o4JPn)}>
              <div className={classNames(projectcss.all, sty.columns__iYw)}>
                <div className={classNames(projectcss.all, sty.column__o6EBp)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__mHkr4)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: lexSirikiatEjbQq0FgkFeUnsplashjpgPvJa2Ogs44Dm,
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__jtBt2)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__aftfY)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: tylerNixHzWerZc5YP4UnsplashjpgUio2G6SsCy5X,
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zQm0H)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lVgC5)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fRyAy)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___829Ii)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fk13F
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Contact us\n"
                      : "Contact us\n"}
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__lNrUi
                    )}
                    platform={"react"}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "(555) 555-5555"
                      : "(555) 555-5555"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__d3Oab
                    )}
                    platform={"react"}
                  >
                    {"support@example.com"}
                  </PlasmicLink__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fsHpt)}
              >
                <PlasmicLink__
                  data-plasmic-name={"_3"}
                  data-plasmic-override={overrides._3}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty._3
                  )}
                  href={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "#"
                      : `/shop`
                  }
                  platform={"react"}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Shop"
                    : "Shop"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__yd3Dg
                  )}
                  href={`/academy`}
                  platform={"react"}
                >
                  {"The Academy"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___4ISkU
                  )}
                  href={`/about`}
                  platform={"react"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__tjshb
                  )}
                  href={`/help`}
                  platform={"react"}
                >
                  {"Help"}
                </PlasmicLink__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zJn1O)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jpjrs
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Email newsletter"
                    : "Email newsletter"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__c1W6P)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    endIcon={
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__phjDz
                        )}
                        submitsForm={true}
                      >
                        <AngleRightsvgIcon
                          className={classNames(projectcss.all, sty.svg__l2Bn)}
                          role={"img"}
                        />
                      </Button>
                    }
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "E-mail"
                        : "E-mail"
                    }
                    showEndIcon={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    }
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fPqG)}
              >
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wsqcC
                  )}
                  platform={"react"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__x4LlM)}
                      role={"img"}
                    />
                  ) : null}
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hhxeX)}
                  >
                    <PlasmicIcon__
                      PlasmicIconType={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? Icon3Icon
                          : Icon3Icon
                      }
                      className={classNames(projectcss.all, sty.svg__iRxA)}
                      role={"img"}
                    />

                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__lYfce)}
                      role={"img"}
                    />

                    <PlasmicIcon__
                      PlasmicIconType={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? Icon28Icon
                          : Icon28Icon
                      }
                      className={classNames(projectcss.all, sty.svg__sjT9)}
                      role={"img"}
                    />
                  </Stack__>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___5AgFd)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
              </Stack__>
              {false ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___4NW6N)}
                >
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__jmuA
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Stack__
                    as={PlasmicLink__}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__kqRby
                    )}
                    platform={"react"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__uxZJ)}
                        role={"img"}
                      />
                    ) : null}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5L303
                      )}
                    >
                      {"Log in"}
                    </div>
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___1Glht)}
                        role={"img"}
                      />
                    ) : null}
                  </Stack__>
                </div>
              ) : null}
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox___6VvZs)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vlG5E)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___8Dhxq)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__tl8Vf)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cedod
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "(c) Company. All rights reserved. This site proudly built with"
                        : "\u00a9 Company. All rights reserved. This site proudly built with"}
                    </div>
                    <PlasmicLink__
                      data-plasmic-name={"httpsstudioplasmicapp"}
                      data-plasmic-override={overrides.httpsstudioplasmicapp}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.httpsstudioplasmicapp
                      )}
                      platform={"react"}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? " Plasmic"
                        : " Plasmic"}
                    </PlasmicLink__>
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___5Jg58)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__a7Ckb)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nq0Il)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___2Idh0
                        )}
                      >
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__fPvD7
                          )}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/shipping`
                              : `/shipping`
                          }
                          platform={"react"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__lladA
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___6EIs8
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "shop"
                              : "Shipping & Returns"}
                          </div>
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__y0E5F
                              )}
                              role={"img"}
                            />
                          ) : null}
                        </Stack__>
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__gCvmS
                          )}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/privacypolicy`
                              : `/privacypolicy`
                          }
                          platform={"react"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__n1V5K
                              )}
                              role={"img"}
                            />
                          ) : null}
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___0Wp4C
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__gfYy
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "Privacy policy"
                              : "Privacy policy"}
                          </div>
                        </Stack__>
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__uCzf5
                          )}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/terms`
                              : `/terms`
                          }
                          platform={"react"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ozk23
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__hNuFl
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "Terms & Conditions"
                              : "Terms & Conditions"}
                          </div>
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__c3G6K
                              )}
                              role={"img"}
                            />
                          ) : null}
                        </Stack__>
                      </Stack__>
                    </Stack__>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </Stack__>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "_3", "textInput", "httpsstudioplasmicapp"],
  header: ["header"],
  _3: ["_3"],
  textInput: ["textInput"],
  httpsstudioplasmicapp: ["httpsstudioplasmicapp"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  _3: "a";
  textInput: typeof TextInput;
  httpsstudioplasmicapp: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTheAcademy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTheAcademy__VariantsArgs;
    args?: PlasmicTheAcademy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTheAcademy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTheAcademy__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTheAcademy__ArgProps,
          internalVariantPropNames: PlasmicTheAcademy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTheAcademy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTheAcademy";
  } else {
    func.displayName = `PlasmicTheAcademy.${nodeName}`;
  }
  return func;
}

export const PlasmicTheAcademy = Object.assign(
  // Top-level PlasmicTheAcademy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    _3: makeNodeComponent("_3"),
    textInput: makeNodeComponent("textInput"),
    httpsstudioplasmicapp: makeNodeComponent("httpsstudioplasmicapp"),

    // Metadata about props expected for PlasmicTheAcademy
    internalVariantProps: PlasmicTheAcademy__VariantProps,
    internalArgProps: PlasmicTheAcademy__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTheAcademy;
/* prettier-ignore-end */

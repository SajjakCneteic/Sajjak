// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oDn7wdWyHsZpqBYxQPecYY
// Component: Ua0JAOuc2lTX

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oDn7wdWyHsZpqBYxQPecYY/projectcss
import sty from "./PlasmicTestmonial.module.css"; // plasmic-import: Ua0JAOuc2lTX/css

import ArrowLeftSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ArrowLeftSvgrepoCom1Svg"; // plasmic-import: YDbptbvHk5HT/icon
import StarSvgrepoComsvgIcon from "./icons/PlasmicIcon__StarSvgrepoComsvg"; // plasmic-import: pA9iXz50vW-u/icon
import ArrowRightSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ArrowRightSvgrepoCom1Svg"; // plasmic-import: CWlHCO3Mr0t0/icon

createPlasmicElementProxy;

export type PlasmicTestmonial__VariantMembers = {};
export type PlasmicTestmonial__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestmonial__VariantsArgs;
export const PlasmicTestmonial__VariantProps = new Array<VariantPropType>();

export type PlasmicTestmonial__ArgsType = {
  children?: React.ReactNode;
  children2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTestmonial__ArgsType;
export const PlasmicTestmonial__ArgProps = new Array<ArgPropType>(
  "children",
  "children2"
);

export type PlasmicTestmonial__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultTestmonialProps {
  children?: React.ReactNode;
  children2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicTestmonial__RenderFunc(props: {
  variants: PlasmicTestmonial__VariantsArgs;
  args: PlasmicTestmonial__ArgsType;
  overrides: PlasmicTestmonial__OverridesType;
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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
      <div className={classNames(projectcss.all, sty.column___849S0)}>
        <div className={classNames(projectcss.all, sty.freeBox__gxDzU)}>
          {renderPlasmicSlot({
            defaultContents: (
              <ArrowLeftSvgrepoCom1SvgIcon
                className={classNames(projectcss.all, sty.svg__y2Keb)}
                role={"img"}
              />
            ),

            value: args.children
          })}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__pvIeI)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sqv2C)}
        >
          <StarSvgrepoComsvgIcon
            className={classNames(projectcss.all, sty.svg__eUp1)}
            role={"img"}
          />

          <StarSvgrepoComsvgIcon
            className={classNames(projectcss.all, sty.svg__hn0Is)}
            role={"img"}
          />

          <StarSvgrepoComsvgIcon
            className={classNames(projectcss.all, sty.svg__djA7)}
            role={"img"}
          />

          <StarSvgrepoComsvgIcon
            className={classNames(projectcss.all, sty.svg__xid9R)}
            role={"img"}
          />

          <StarSvgrepoComsvgIcon
            className={classNames(projectcss.all, sty.svg___4UIpy)}
            role={"img"}
          />
        </Stack__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qt2Gj
          )}
        >
          {
            '"A sem a velit consequat a torquent posuere nibh consectetur ac \nsodales mi vulputate imperdiet suspendisse a adipiscing felis convallis \nest tristique faucibus condimentum ante viverra."'
          }
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0CjXa
          )}
        >
          {"Carmine R , California "}
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.column__uSlR)}>
        <div className={classNames(projectcss.all, sty.freeBox__nr6Ws)}>
          {renderPlasmicSlot({
            defaultContents: (
              <ArrowRightSvgrepoCom1SvgIcon
                className={classNames(projectcss.all, sty.svg___0Kjsw)}
                role={"img"}
              />
            ),

            value: args.children2
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestmonial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestmonial__VariantsArgs;
    args?: PlasmicTestmonial__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestmonial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestmonial__ArgsType,
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
          internalArgPropNames: PlasmicTestmonial__ArgProps,
          internalVariantPropNames: PlasmicTestmonial__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestmonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestmonial";
  } else {
    func.displayName = `PlasmicTestmonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestmonial = Object.assign(
  // Top-level PlasmicTestmonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestmonial
    internalVariantProps: PlasmicTestmonial__VariantProps,
    internalArgProps: PlasmicTestmonial__ArgProps
  }
);

export default PlasmicTestmonial;
/* prettier-ignore-end */

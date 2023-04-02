"use client";

import React from "react";

import * as PhosphorIcons from "phosphor-react";
import * as TablerIcons from "react-icons/tb";

export type IconName =
  | "dead-outline"
  | "alive-outline"
  | "unknown-outline"
  | "heart-fill"
  | "heart-break-fill"
  | "heart-outline"
  | "male-outline"
  | "female-outline"
  | "genderless-outline"
  | "search-outline"
  | "filter-outline"
  | "location-fill"
  | "episode-fill";

export interface IconProps {
  name: IconName;
  size: number;
}

const iconList: Record<IconName, React.FC<Pick<IconProps, "size">>> = {
  "dead-outline": (props) => (
    <PhosphorIcons.Skull weight="regular" {...props} />
  ),
  "alive-outline": (props) => (
    <PhosphorIcons.Heartbeat weight="regular" {...props} />
  ),
  "unknown-outline": (props) => (
    <PhosphorIcons.Question weight="regular" {...props} />
  ),
  "heart-fill": (props) => <PhosphorIcons.Heart weight="fill" {...props} />,
  "heart-break-fill": (props) => (
    <PhosphorIcons.HeartBreak weight="fill" {...props} />
  ),
  "heart-outline": (props) => (
    <PhosphorIcons.Heart weight="regular" {...props} />
  ),
  "male-outline": (props) => <TablerIcons.TbGenderMale {...props} />,
  "female-outline": (props) => <TablerIcons.TbGenderFemale {...props} />,
  "genderless-outline": (props) => (
    <TablerIcons.TbGenderGenderless {...props} />
  ),
  "search-outline": (props) => (
    <PhosphorIcons.MagnifyingGlass weight="regular" {...props} />
  ),
  "filter-outline": (props) => (
    <PhosphorIcons.Faders weight="bold" {...props} />
  ),
  "location-fill": (props) => <PhosphorIcons.MapPin weight="fill" {...props} />,
  "episode-fill": (props) => (
    <PhosphorIcons.MonitorPlay weight="fill" {...props} />
  ),
};

const Icon: React.FC<IconProps> = ({ name, size }) =>
  iconList[name ?? "unknown-outline"]({ size });

export default Icon;

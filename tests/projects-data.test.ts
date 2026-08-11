import assert from "node:assert/strict";
import test from "node:test";
import { projectsData } from "../lib/projects-data.ts";

test("publishes one canonical Geo Tool project", () => {
  const geoProjects = projectsData.filter((project) => project.slug === "geo-tool");

  assert.equal(projectsData.length, 8);
  assert.equal(geoProjects.length, 1);
  assert.equal(geoProjects[0].name, "Geo Tool");
  assert.equal(geoProjects[0].githubUrl, "https://github.com/spandreou/geo-tool");
  assert.equal(geoProjects[0].status, "in-progress");
  assert.equal(
    projectsData.some((project) => project.slug === "real-estate-analytics"),
    false,
  );
  assert.equal(
    projectsData.some((project) => project.slug === "geo-data-processing-tool"),
    false,
  );
});

---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="profile-container">
  <div class="profile-image">
    <img src="{{ site.baseurl }}/images/linkedin.png" alt="Apratim Mishra" class="profile-pic">
  </div>
  <div class="profile-intro">
    <h1>Apratim Mishra</h1>
    <h2>PhD Candidate in Information Sciences</h2>
    <p class="university">University of Illinois at Urbana-Champaign</p>
    <div class="contact-info">
      <p><i class="fas fa-envelope"></i> <a href="mailto:apratim941208@gmail.com">apratim941208@gmail.com</a></p>
      <div class="social-links">
        <a href="https://github.com/apratim-mishra" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/apratim94/" target="_blank" class="social-link"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/Yoichi_1208" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
        <a href="https://medium.com/@apratim941208" target="_blank" class="social-link"><i class="fab fa-medium"></i></a>
        <a href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ&hl=en" target="_blank" class="social-link"><i class="fas fa-graduation-cap"></i></a>
      </div>
    </div>
  </div>
</div>

<div class="section-divider"></div>

## About Me

Hello! I am a PhD candidate in Information Sciences at the University of Illinois at Urbana-Champaign. My research focuses on machine learning and natural language processing (NLP) applications. I'm passionate about developing innovative solutions to complex problems using advanced AI techniques.

<div class="highlights-container">
  <div class="highlight-box">
    <h3><i class="fas fa-flask"></i> Research Interests</h3>
    <ul>
      <li>Natural Language Processing</li>
      <li>Machine Learning</li>
      <li>Deep Learning</li>
      <li>Protein Language Models</li>
      <li>Graph Neural Networks</li>
    </ul>
  </div>
  
  <div class="highlight-box">
    <h3><i class="fas fa-laptop-code"></i> Key Skills</h3>
    <ul>
      <li>Python, R</li>
      <li>PyTorch, TensorFlow</li>
      <li>NLP & Text Analytics</li>
      <li>Data Science</li>
      <li>Model Optimization</li>
    </ul>
  </div>
  
  <div class="highlight-box">
    <h3><i class="fas fa-award"></i> Achievements</h3>
    <ul>
      <li>Published research in top-tier conferences</li>
      <li>Developed optimized deep learning models</li>
      <li>Engineered NLP pipelines for real-world applications</li>
      <li>Reduced computational costs by 15% through ML optimization</li>
    </ul>
  </div>
</div>

<div class="section-divider"></div>

## Recent Projects

<div class="projects-grid">
  <div class="project-card">
    <h3>Protein Language Models</h3>
    <p>Utilized protein language models (PLMs) and graph neural networks (GNNs) to derive insights and predict complex biological behaviors.</p>
    <div class="project-links">
      <a href="{{ site.baseurl }}/portfolio/" class="btn btn--small">Learn More</a>
    </div>
  </div>
  
  <div class="project-card">
    <h3>NLP Pipeline for Quotation Extraction</h3>
    <p>Engineered an NLP pipeline for quotation extraction and entity classification leveraging tools like spaCy and Stanford CoreNLP.</p>
    <div class="project-links">
      <a href="{{ site.baseurl }}/portfolio/" class="btn btn--small">Learn More</a>
    </div>
  </div>
  
  <div class="project-card">
    <h3>Energy Load Prediction</h3>
    <p>Analyzed energy load trends using Python by employing models like Arima, XGBoost, LGBMBoost, and LSTMs.</p>
    <div class="project-links">
      <a href="{{ site.baseurl }}/portfolio/" class="btn btn--small">Learn More</a>
    </div>
  </div>
</div>

<div class="section-divider"></div>

## Recent Publications

<div class="publications-list">
  {% for post in site.publications reversed limit:3 %}
    {% include archive-single-cv.html %}
  {% endfor %}
  
  <div class="view-all">
    <a href="{{ site.baseurl }}/publications/" class="btn btn--primary">View All Publications</a>
  </div>
</div>

<style>
  .profile-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 2em;
  }
  
  .profile-image {
    flex: 0 0 200px;
    margin-right: 2em;
    margin-bottom: 1em;
  }
  
  .profile-pic {
    border-radius: 50%;
    max-width: 100%;
    border: 3px solid #f2f3f3;
  }
  
  .profile-intro {
    flex: 1;
    min-width: 300px;
  }
  
  .profile-intro h1 {
    margin-top: 0;
    margin-bottom: 0.2em;
    color: #494e52;
  }
  
  .profile-intro h2 {
    margin-top: 0;
    margin-bottom: 0.2em;
    font-size: 1.5em;
    color: #646769;
  }
  
  .university {
    font-style: italic;
    margin-bottom: 1em;
  }
  
  .contact-info {
    margin-top: 1em;
  }
  
  .social-links {
    margin-top: 0.5em;
  }
  
  .social-link {
    display: inline-block;
    margin-right: 1em;
    font-size: 1.5em;
    color: #494e52;
    transition: color 0.3s ease;
  }
  
  .social-link:hover {
    color: #52adc8;
  }
  
  .section-divider {
    height: 1px;
    background-color: #f2f3f3;
    margin: 2em 0;
  }
  
  .highlights-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5em;
    margin: 2em 0;
  }
  
  .highlight-box {
    background-color: #f8f9fa;
    padding: 1.5em;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .highlight-box h3 {
    margin-top: 0;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    color: #494e52;
  }
  
  .highlight-box ul {
    padding-left: 1.5em;
    margin-bottom: 0;
  }
  
  .highlight-box li {
    margin-bottom: 0.5em;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5em;
    margin: 2em 0;
  }
  
  .project-card {
    background-color: #fff;
    padding: 1.5em;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border: 1px solid #f2f3f3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .project-card h3 {
    margin-top: 0;
    color: #494e52;
  }
  
  .project-links {
    margin-top: 1em;
  }
  
  .btn--small {
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #52adc8;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    font-size: 0.8em;
    transition: background-color 0.3s ease;
  }
  
  .btn--small:hover {
    background-color: #3d8ca7;
  }
  
  .publications-list {
    margin: 2em 0;
  }
  
  .view-all {
    text-align: center;
    margin-top: 2em;
  }
  
  .btn--primary {
    display: inline-block;
    padding: 0.75em 1.5em;
    background-color: #52adc8;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    transition: background-color 0.3s ease;
  }
  
  .btn--primary:hover {
    background-color: #3d8ca7;
  }
</style>

<!-- This is the front page of a website that is powered by the [academicpages template](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub pages. [GitHub pages](https://pages.github.com) is a free service in which websites are built and hosted from code and data stored in a GitHub repository, automatically updating when a new commit is made to the respository. This template was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) created by Michael Rose, and then extended to support the kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a dynamically-generated CV. You can fork [this repository](https://github.com/academicpages/academicpages.github.io) right now, modify the configuration and markdown files, add your own PDFs and other content, and have your own site for free, with no ads! An older version of this template powers my own personal website at [stuartgeiger.com](http://stuartgeiger.com), which uses [this Github repository](https://github.com/staeiou/staeiou.github.io).

A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png) -->

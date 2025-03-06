---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<div class="scholar-container">
  <div class="scholar-info">
    <i class="fas fa-graduation-cap scholar-icon"></i>
    <h2>Academic Publications</h2>
    <p>You can find my articles on my Google Scholar profile.</p>
    <div class="scholar-link">
      <a href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ&hl=en" target="_blank" class="btn btn--primary">
        <i class="fas fa-external-link-alt"></i> View Google Scholar Profile
      </a>
    </div>
  </div>
</div>

<style>
  .scholar-container {
    display: flex;
    justify-content: center;
    padding: 3em 1em;
  }

  .scholar-info {
    background-color: #f8f9fa;
    padding: 3em;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    text-align: center;
    position: relative;
    max-width: 800px;
    width: 100%;
  }
  
  .scholar-icon {
    font-size: 3em;
    color: #52adc8;
    margin-bottom: 0.5em;
  }
  
  .scholar-info h2 {
    margin-top: 0;
    color: #494e52;
    margin-bottom: 0.5em;
  }
  
  .scholar-info p {
    color: #666;
    line-height: 1.6;
    margin: 0 auto 1.5em;
    font-size: 1.1em;
  }
  
  .scholar-link {
    margin-top: 1.5em;
  }
  
  .btn--primary {
    display: inline-block;
    padding: 0.75em 1.5em;
    background-color: #52adc8;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    transition: background-color 0.3s ease;
    font-size: 1.1em;
  }
  
  .btn--primary:hover {
    background-color: #3d8ca7;
  }
</style>

{% comment %}
Everything else has been commented out to simplify the page
{% include base_path %}

<div class="publications-container">
  {% for post in site.publications reversed %}
    <div class="publication-item" data-type="{{ post.venue_type | default: 'conference' }}">
      <div class="publication-year">{{ post.date | date: "%Y" }}</div>
      <div class="publication-content">
        <h2 class="publication-title">{{ post.title }}</h2>
        <div class="publication-authors">{{ post.authors | default: post.author }}</div>
        <div class="publication-venue">{{ post.venue }}</div>
        <div class="publication-links">
          {% if post.paperurl %}
            <a href="{{ post.paperurl }}" class="btn btn--paper" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
          {% endif %}
          {% if post.citation %}
            <a href="#" class="btn btn--cite" onclick="toggleCitation('citation-{{ forloop.index }}'); return false;"><i class="fas fa-quote-left"></i> Cite</a>
          {% endif %}
          {% if post.code %}
            <a href="{{ post.code }}" class="btn btn--code" target="_blank"><i class="fas fa-code"></i> Code</a>
          {% endif %}
          {% if post.slides %}
            <a href="{{ post.slides }}" class="btn btn--slides" target="_blank"><i class="fas fa-desktop"></i> Slides</a>
          {% endif %}
        </div>
        {% if post.citation %}
          <div class="publication-citation" id="citation-{{ forloop.index }}" style="display: none;">
            <div class="citation-box">
              <pre>{{ post.citation }}</pre>
              <button class="copy-btn" onclick="copyToClipboard('citation-{{ forloop.index }}-text')">Copy</button>
              <div id="citation-{{ forloop.index }}-text" style="display: none;">{{ post.citation }}</div>
            </div>
          </div>
        {% endif %}
        {% if post.abstract %}
          <div class="publication-abstract">
            <h3>Abstract</h3>
            <p>{{ post.abstract }}</p>
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<script>
  function toggleCitation(id) {
    var citation = document.getElementById(id);
    if (citation.style.display === "none") {
      citation.style.display = "block";
    } else {
      citation.style.display = "none";
    }
  }
  
  function copyToClipboard(id) {
    var text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Citation copied to clipboard!");
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
</script>

<style>
  .publications-intro {
    margin-bottom: 2em;
    font-size: 1.1em;
    line-height: 1.6;
    color: #494e52;
  }
  
  .publication-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-bottom: 2em;
  }
  
  .filter-btn {
    padding: 0.5em 1em;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .filter-btn:hover {
    background-color: #e9ecef;
  }
  
  .filter-btn.active {
    background-color: #52adc8;
    color: white;
    border-color: #52adc8;
  }
  
  .publications-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  
  .publication-item {
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border: 1px solid #f2f3f3;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .publication-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .publication-year {
    background-color: #52adc8;
    color: white;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    min-width: 80px;
    font-size: 1.2em;
  }
  
  .publication-content {
    padding: 1.5em;
    flex: 1;
  }
  
  .publication-title {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #494e52;
  }
  
  .publication-authors {
    margin-bottom: 0.5em;
    font-style: italic;
  }
  
  .publication-venue {
    margin-bottom: 1em;
    font-weight: bold;
    color: #646769;
  }
  
  .publication-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75em;
    margin-bottom: 1em;
  }
  
  .btn {
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    border-radius: 3px;
    font-size: 0.9em;
    transition: background-color 0.3s ease;
  }
  
  .btn--paper {
    background-color: #dc3545;
    color: #fff;
  }
  
  .btn--paper:hover {
    background-color: #c82333;
  }
  
  .btn--cite {
    background-color: #6c757d;
    color: #fff;
  }
  
  .btn--cite:hover {
    background-color: #5a6268;
  }
  
  .btn--code {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn--code:hover {
    background-color: #218838;
  }
  
  .btn--slides {
    background-color: #17a2b8;
    color: #fff;
  }
  
  .btn--slides:hover {
    background-color: #138496;
  }
  
  .publication-citation {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  
  .citation-box {
    background-color: #f8f9fa;
    padding: 1em;
    border-radius: 3px;
    position: relative;
  }
  
  .citation-box pre {
    margin: 0;
    white-space: pre-wrap;
    font-size: 0.9em;
    font-family: monospace;
  }
  
  .copy-btn {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    padding: 0.25em 0.5em;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8em;
  }
  
  .copy-btn:hover {
    background-color: #5a6268;
  }
  
  .publication-abstract {
    margin-top: 1em;
    border-top: 1px solid #f2f3f3;
    padding-top: 1em;
  }
  
  .publication-abstract h3 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-size: 1.1em;
    color: #494e52;
  }
  
  .publication-abstract p {
    margin: 0;
    color: #646769;
    line-height: 1.6;
  }
</style>
{% endcomment %}

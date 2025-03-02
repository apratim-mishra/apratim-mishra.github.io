---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ&hl=en">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<div class="publications-intro">
  <p>This page contains my academic publications, conference papers, and research articles. My research focuses on machine learning, natural language processing, and their applications in various domains.</p>
</div>

<div class="publication-filters">
  <button class="filter-btn active" data-filter="all">All Publications</button>
  <button class="filter-btn" data-filter="journal">Journal Articles</button>
  <button class="filter-btn" data-filter="conference">Conference Papers</button>
  <button class="filter-btn" data-filter="workshop">Workshop Papers</button>
</div>

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
  
  document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter publications
        var publications = document.querySelectorAll('.publication-item');
        publications.forEach(function(pub) {
          if (filter === 'all' || pub.getAttribute('data-type') === filter) {
            pub.style.display = 'flex';
          } else {
            pub.style.display = 'none';
          }
        });
      });
    });
  });
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
